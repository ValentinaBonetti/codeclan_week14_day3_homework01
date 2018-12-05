import React, {Component} from 'react';
import NumberOfApplicantsForm from '../components/NumberOfApplicantsForm';
import ApplicantForm from '../components/ApplicantForm';

class MortgageCalculatorContainer extends Component {

  constructor() {
    super();
    this.state = {
      numberOfApplicants: 1,
      applicantsData: [],
      maxMortgage: 0
    };
    // any bindings?
    this.handleButtonChecked = this.handleButtonChecked.bind(this);
    this.handleFormPost = this.handleFormPost.bind(this);
    this.calculateMaxMortgage = this.calculateMaxMortgage.bind(this);
//    this.createApplicantForms = this.createApplicantForms.bind(this);
  }

  handleButtonChecked(applicants) {
    this.setState({numberOfApplicants: applicants})
  }

  handleFormPost(applicantData) {
    applicantData.id = Date.now();
    const updatedApplicantsData = [...this.state.applicantsData, applicantData]
    this.setState({applicantsData: updatedApplicantsData})
    const updatedMortgage = this.state.maxMortgage += this.calculateMaxMortgage();
    this.setState({maxMortgage: updatedMortgage});
  }

  calculateMaxMortgage() {
    let applicantMaxMortgage = 0;
    this.state.applicantsData.forEach(data => {
      applicantMaxMortgage += (data.annualSalary*3+data.otherAnnualIncome-12*data.monthlyExpenditure)})
    return applicantMaxMortgage;
  }

  // createApplicantForms() {
  //   let applicantNodes = [];
  //   for(let i=0;i<this.numberOfApplicants;i++){
  //     applicantNodes.push(<ApplicantForm key={i}/>);
  //     debugger;
  //   }
  //   return applicantNodes
  // }



  render() {
    return (
      <div className="mortgage-calculator-container">
        <h1>MORTGAGE CALCULATOR</h1>
        <NumberOfApplicantsForm onButtonChecked = {this.handleButtonChecked}/>
        <ApplicantForm onApplicantSubmit = {this.handleFormPost}/>
        <h3>maximum mortgage: {this.state.maxMortgage}</h3>
      </div>
    )
  }

  // {this.createApplicantForms()}



}

export default MortgageCalculatorContainer;
