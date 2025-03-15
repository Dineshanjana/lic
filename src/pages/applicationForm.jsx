import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  ArrowRight, ArrowLeft, User, MapPin, DollarSign, 
  Activity, Image, Users, Check, Upload, Calendar, Phone,
  Save
} from 'lucide-react';

import '../Css/ApplicationForm.css';

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationId, setApplicationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    dob: '',
    phone: '',
    gender: '',
    personalDocumentType: '',
    personalDocumentFile: null,
    personalDocumentUrl: '',
    
    // Address Proof
    fullAddress: '',
    state: '',
    district: '',
    pincode: '',
    addressDocumentType: '',
    addressDocumentFile: null,
    addressDocumentUrl: '',
    
    // Income Proof
    incomeDocumentType: '',
    incomeDocumentFile: null,
    incomeDocumentUrl: '',
    
    // Medical Docs
    medicalDocumentType: '',
    medicalDocumentFile: null,
    medicalDocumentUrl: '',
    
    // Photo & Signatures
    photoFile: null,
    photoUrl: '',
    signatureFile: null,
    signatureUrl: '',
    
    // Nominee Details
    nomineeName: '',
    relation: '',
    nomineeDocumentType: '',
    nomineeDocumentFile: null,
    nomineeDocumentUrl: '',
  });

  const [stepSaved, setStepSaved] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  const totalSteps = 6;

  // API endpoints
  const API_ENDPOINTS = {
    CREATE: 'http://localhost:5000/api/application/create',
    PERSONAL_INFO: 'http://localhost:5000/api/application/personal-info',
    ADDRESS_PROOF: 'http://localhost:5000/api/application/address-proof',
    INCOME_PROOF: 'http://localhost:5000/api/application/income-proof',
    MEDICAL_DOCS: 'http://localhost:5000/api/application/medical-docs',
    PHOTO_SIGN: 'http://localhost:5000/api/application/photo-sign',
    NOMINEE_DETAILS: 'http://localhost:5000/api/application/nominee-details'
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const fileKey = name.replace('Url', 'File');
    
    // Store the actual file for axios upload
    setFormData({
      ...formData,
      [fileKey]: files[0],
      [name]: URL.createObjectURL(files[0])
    });
  };

  // Create a new application or save the current step
  const saveCurrentStep = async () => {
    setLoading(true);
    try {
      let endpoint;
      let formDataToSend = new FormData();
      
      // Append application ID if it exists
      if (applicationId) {
        formDataToSend.append('applicationId', applicationId);
      }

      switch(currentStep) {
        case 1:
          endpoint = applicationId ? API_ENDPOINTS.PERSONAL_INFO : API_ENDPOINTS.CREATE;
          formDataToSend.append('name', formData.name);
          formDataToSend.append('dob', formData.dob);
          formDataToSend.append('phone', formData.phone);
          formDataToSend.append('gender', formData.gender);
          formDataToSend.append('personalDocumentType', formData.personalDocumentType);
          if (formData.personalDocumentFile) {
            formDataToSend.append('personalDocument', formData.personalDocumentFile);
          }
          break;
          
        case 2:
          endpoint = API_ENDPOINTS.ADDRESS_PROOF;
          formDataToSend.append('fullAddress', formData.fullAddress);
          formDataToSend.append('state', formData.state);
          formDataToSend.append('district', formData.district);
          formDataToSend.append('pincode', formData.pincode);
          formDataToSend.append('addressDocumentType', formData.addressDocumentType);
          if (formData.addressDocumentFile) {
            formDataToSend.append('addressDocument', formData.addressDocumentFile);
          }
          break;
          
        case 3:
          endpoint = API_ENDPOINTS.INCOME_PROOF;
          formDataToSend.append('incomeDocumentType', formData.incomeDocumentType);
          if (formData.incomeDocumentFile) {
            formDataToSend.append('incomeDocument', formData.incomeDocumentFile);
          }
          break;
          
        case 4:
          endpoint = API_ENDPOINTS.MEDICAL_DOCS;
          formDataToSend.append('medicalDocumentType', formData.medicalDocumentType);
          if (formData.medicalDocumentFile) {
            formDataToSend.append('medicalDocument', formData.medicalDocumentFile);
          }
          break;
          
        case 5:
          endpoint = API_ENDPOINTS.PHOTO_SIGN;
          if (formData.photoFile) {
            formDataToSend.append('photo', formData.photoFile);
          }
          if (formData.signatureFile) {
            formDataToSend.append('signature', formData.signatureFile);
          }
          break;
          
        case 6:
          endpoint = API_ENDPOINTS.NOMINEE_DETAILS;
          formDataToSend.append('nomineeName', formData.nomineeName);
          formDataToSend.append('relation', formData.relation);
          formDataToSend.append('nomineeDocumentType', formData.nomineeDocumentType);
          if (formData.nomineeDocumentFile) {
            formDataToSend.append('nomineeDocument', formData.nomineeDocumentFile);
          }
          break;
          
        default:
          break;
      }

      const response = await axios.post(endpoint, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // If this is the first step and we're creating a new application, save the ID
      if (currentStep === 1 && !applicationId) {
        setApplicationId(response.data.applicationId);
      }
      
      // Mark this step as saved
      setStepSaved({
        ...stepSaved,
        [currentStep]: true
      });
      
      // Show success message
      alert(`Step ${currentStep} saved successfully!`);
      
    } catch (error) {
      console.error('Error saving step:', error);
      alert(`Error saving step ${currentStep}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  const nextStep = async () => {
    if (!stepSaved[currentStep]) {
      // If step is not saved, save it first
      try {
        await saveCurrentStep();
        if (currentStep < totalSteps) {
          setCurrentStep(currentStep + 1);
        }
      } catch (error) {
        console.error('Error saving before next step:', error);
      }
    } else {
      // If step is already saved, just move to next step
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Save the final step if not already saved
    if (!stepSaved[currentStep]) {
      try {
        await saveCurrentStep();
        alert('Application submitted successfully!');
      } catch (error) {
        console.error('Error submitting application:', error);
        alert(`Error submitting application: ${error.message}`);
      }
    } else {
      alert('Application submitted successfully!');
    }
  };
  
  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3 className="step-title">Personal Information</h3>
            <p className="step-description">Please provide your personal details</p>
            
            <div className="ap-form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-container">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="dob">Date of Birth</label>
              <div className="input-container">
                <Calendar size={18} className="input-icon" />
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-container">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            
            <div className="ap-form-group">
              <label>Gender</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                  />
                  <span>Male</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                  />
                  <span>Female</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="personalDocumentType">ID Proof Type</label>
              <select
                id="personalDocumentType"
                name="personalDocumentType"
                value={formData.personalDocumentType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select ID Type</option>
                <option value="aadhar">Aadhar Card</option>
                <option value="pan">PAN Card</option>
                <option value="passport">Passport</option>
                <option value="driving">Driving License</option>
              </select>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="personalDocumentUrl">Upload ID Proof</label>
              <div className="file-upload">
                <Upload size={18} className="upload-icon" />
                <input
                  type="file"
                  id="personalDocumentUrl"
                  name="personalDocumentUrl"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  required
                />
                <span className="file-label">Choose file</span>
              </div>
              {formData.personalDocumentUrl && (
                <div className="file-preview">
                  <span className="file-name">Document uploaded</span>
                  <Check size={16} className="success-icon" />
                </div>
              )}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="step-content">
            <h3 className="step-title">Address Details</h3>
            <p className="step-description">Please provide your address information</p>
            
            <div className="ap-form-group">
              <label htmlFor="fullAddress">Full Address</label>
              <textarea
                id="fullAddress"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleInputChange}
                placeholder="Enter your complete address"
                rows={3}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="ap-form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Enter state"
                  required
                />
              </div>
              
              <div className="ap-form-group">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  placeholder="Enter district"
                  required
                />
              </div>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="Enter pincode"
                required
              />
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="addressDocumentType">Address Proof Type</label>
              <select
                id="addressDocumentType"
                name="addressDocumentType"
                value={formData.addressDocumentType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Address Proof</option>
                <option value="utility">Utility Bill</option>
                <option value="aadhar">Aadhar Card</option>
                <option value="passport">Passport</option>
                <option value="rental">Rental Agreement</option>
              </select>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="addressDocumentUrl">Upload Address Proof</label>
              <div className="file-upload">
                <Upload size={18} className="upload-icon" />
                <input
                  type="file"
                  id="addressDocumentUrl"
                  name="addressDocumentUrl"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  required
                />
                <span className="file-label">Choose file</span>
              </div>
              {formData.addressDocumentUrl && (
                <div className="file-preview">
                  <span className="file-name">Document uploaded</span>
                  <Check size={16} className="success-icon" />
                </div>
              )}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="step-content">
            <h3 className="step-title">Income Proof</h3>
            <p className="step-description">Please provide your income details</p>
            
            <div className="ap-form-group">
              <label htmlFor="incomeDocumentType">Income Proof Type</label>
              <select
                id="incomeDocumentType"
                name="incomeDocumentType"
                value={formData.incomeDocumentType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Income Proof</option>
                <option value="salary">Salary Slip</option>
                <option value="itr">Income Tax Return</option>
                <option value="form16">Form 16</option>
                <option value="bankStatement">Bank Statement</option>
              </select>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="incomeDocumentUrl">Upload Income Proof</label>
              <div className="file-upload">
                <Upload size={18} className="upload-icon" />
                <input
                  type="file"
                  id="incomeDocumentUrl"
                  name="incomeDocumentUrl"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  required
                />
                <span className="file-label">Choose file</span>
              </div>
              {formData.incomeDocumentUrl && (
                <div className="file-preview">
                  <span className="file-name">Document uploaded</span>
                  <Check size={16} className="success-icon" />
                </div>
              )}
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="step-content">
            <h3 className="step-title">Medical Documents</h3>
            <p className="step-description">Please provide your medical information</p>
            
            <div className="ap-form-group">
              <label htmlFor="medicalDocumentType">Medical Document Type</label>
              <select
                id="medicalDocumentType"
                name="medicalDocumentType"
                value={formData.medicalDocumentType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Medical Document</option>
                <option value="medical_certificate">Medical Certificate</option>
                <option value="health_report">Health Report</option>
                <option value="fitness_certificate">Fitness Certificate</option>
                <option value="doctor_statement">Doctor's Statement</option>
              </select>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="medicalDocumentUrl">Upload Medical Document</label>
              <div className="file-upload">
                <Upload size={18} className="upload-icon" />
                <input
                  type="file"
                  id="medicalDocumentUrl"
                  name="medicalDocumentUrl"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  required
                />
                <span className="file-label">Choose file</span>
              </div>
              {formData.medicalDocumentUrl && (
                <div className="file-preview">
                  <span className="file-name">Document uploaded</span>
                  <Check size={16} className="success-icon" />
                </div>
              )}
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="step-content">
            <h3 className="step-title">Photo & Signature</h3>
            <p className="step-description">Please upload your recent photograph and signature</p>
            
            <div className="ap-form-group">
              <label htmlFor="photoUrl">Upload Photograph</label>
              <div className="file-upload">
                <Upload size={18} className="upload-icon" />
                <input
                  type="file"
                  id="photoUrl"
                  name="photoUrl"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png"
                  required
                />
                <span className="file-label">Choose file</span>
              </div>
              {formData.photoUrl && (
                <div className="file-preview">
                  <span className="file-name">Photo uploaded</span>
                  <Check size={16} className="success-icon" />
                </div>
              )}
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="signatureUrl">Upload Signature</label>
              <div className="file-upload">
                <Upload size={18} className="upload-icon" />
                <input
                  type="file"
                  id="signatureUrl"
                  name="signatureUrl"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png"
                  required
                />
                <span className="file-label">Choose file</span>
              </div>
              {formData.signatureUrl && (
                <div className="file-preview">
                  <span className="file-name">Signature uploaded</span>
                  <Check size={16} className="success-icon" />
                </div>
              )}
            </div>
          </div>
        );
        
      case 6:
        return (
          <div className="step-content">
            <h3 className="step-title">Nominee Details</h3>
            <p className="step-description">Please provide your nominee information</p>
            
            <div className="ap-form-group">
              <label htmlFor="nomineeName">Nominee Full Name</label>
              <input
                type="text"
                id="nomineeName"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleInputChange}
                placeholder="Enter nominee's full name"
                required
              />
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="relation">Relationship with Nominee</label>
              <input
                type="text"
                id="relation"
                name="relation"
                value={formData.relation}
                onChange={handleInputChange}
                placeholder="Enter your relationship"
                required
              />
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="nomineeDocumentType">Nominee ID Proof Type</label>
              <select
                id="nomineeDocumentType"
                name="nomineeDocumentType"
                value={formData.nomineeDocumentType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select ID Type</option>
                <option value="aadhar">Aadhar Card</option>
                <option value="pan">PAN Card</option>
                <option value="passport">Passport</option>
                <option value="driving">Driving License</option>
              </select>
            </div>
            
            <div className="ap-form-group">
              <label htmlFor="nomineeDocumentUrl">Upload Nominee ID Proof</label>
              <div className="file-upload">
                <Upload size={18} className="upload-icon" />
                <input
                  type="file"
                  id="nomineeDocumentUrl"
                  name="nomineeDocumentUrl"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  required
                />
                <span className="file-label">Choose file</span>
              </div>
              {formData.nomineeDocumentUrl && (
                <div className="file-preview">
                  <span className="file-name">Document uploaded</span>
                  <Check size={16} className="success-icon" />
                </div>
              )}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  const getStepIcon = (step) => {
    switch(step) {
      case 1: return <User size={20} />;
      case 2: return <MapPin size={20} />;
      case 3: return <DollarSign size={20} />;
      case 4: return <Activity size={20} />;
      case 5: return <Image size={20} />;
      case 6: return <Users size={20} />;
      default: return null;
    }
  };
  
  const getStepTitle = (step) => {
    switch(step) {
      case 1: return "Personal Info";
      case 2: return "Address";
      case 3: return "Income";
      case 4: return "Medical";
      case 5: return "Photo";
      case 6: return "Nominee";
      default: return "";
    }
  };

  return (
    <div className="application-main">
      <div className="application-form-container">
        <div className="form-header">
          <h2>LIC Pension Plan Application</h2>
          <p>Complete all steps to apply for your selected LIC pension plan</p>
          {applicationId && (
            <div className="application-id">
              <strong>Application ID:</strong> {applicationId}
            </div>
          )}
        </div>
        
        <div className="steps-container">
          <div className="steps-indicator">
            {[...Array(totalSteps)].map((_, index) => {
              const stepNumber = index + 1;
              return (
                <div 
                  key={stepNumber} 
                  className={`step-item ${stepNumber === currentStep ? 'active' : ''} ${stepNumber < currentStep ? 'completed' : ''} ${stepSaved[stepNumber] ? 'saved' : ''}`}
                  onClick={() => stepNumber <= currentStep && setCurrentStep(stepNumber)}
                >
                  <div className="step-circle">
                    {stepNumber < currentStep && stepSaved[stepNumber] ? 
                      <Check size={16} /> : 
                      getStepIcon(stepNumber)
                    }
                  </div>
                  <span className="step-title">{getStepTitle(stepNumber)}</span>
                  {stepNumber < totalSteps && (
                    <div className={`step-connector ${stepNumber < currentStep ? 'completed' : ''}`}></div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="form-container">
            <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => e.preventDefault()}>
              {renderStepContent()}
              
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="prev-btn" 
                    onClick={prevStep}
                    disabled={loading}
                  >
                    <ArrowLeft size={16} />
                    Previous
                  </button>
                )}
                
                <button 
                  type="button" 
                  className="save-btn" 
                  onClick={saveCurrentStep}
                  disabled={loading || stepSaved[currentStep]}
                >
                  <Save size={16} />
                  {loading ? 'Saving...' : 'Save'}
                </button>
                
                {currentStep < totalSteps ? (
                  <button 
                    type="button" 
                    className="next-btn" 
                    onClick={nextStep}
                    disabled={loading}
                  >
                    Next
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={loading}
                  >
                    Submit Application
                    <Check size={16} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;