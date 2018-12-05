import React, {Component} from 'react';

class ApplicantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annualSalary: 0,
      otherAnnualIncome: 0,
      monthlyExpenditure: 0
    };
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleOtherIncomeChange = this.handleOtherIncomeChange.bind(this);
    this.handleMonthlyExpenditure = this.handleMonthlyExpenditure.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSalaryChange(event) {
    let value = parseInt(event.target.value);
    this.setState({annualSalary: value});
  }

  handleOtherIncomeChange(event) {
    let value = parseInt(event.target.value);
    this.setState({otherAnnualIncome: value});
  }

  handleMonthlyExpenditure(event) {
    let value = parseInt(event.target.value);
    this.setState({monthlyExpenditure: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const salary = this.state.annualSalary;
    const income = this.state.otherAnnualIncome;
    const monthlyExpenditure = this.state.monthlyExpenditure;
    this.props.onApplicantSubmit({annualSalary: salary,
                                  otherAnnualIncome: income,
                                  monthlyExpenditure: monthlyExpenditure})
    this.setState({annualSalary: 0, otherAnnualIncome: 0, monthlyExpenditure: 0})
  }


  render() {
    return (
      <form className="applicant-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="annual salary"
               onChange={this.handleSalaryChange}
               /> annual salary
        <input type="text" placeholder="other annual income"
               onChange={this.handleOtherIncomeChange}
               /> other annual income
        <input type="text" placeholder="monthly expenditure"
               /> monthly expenditure
        <input type="submit"
               value="Post"/>
      </form>
    )
  }
}

export default ApplicantForm;
