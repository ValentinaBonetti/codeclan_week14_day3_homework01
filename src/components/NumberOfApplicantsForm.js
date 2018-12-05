import React, {Component} from 'react';

class NumberOfApplicantsForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {numberOfApplicants: 1};
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(event) {
    let value = parseInt(event.target.value);
    this.props.onButtonChecked(value);
  }

  render() {
    return (
    <form>
      <div className="radio">
        <label>
          <input type="radio" name="n-of-applicants" value={1} defaultChecked onChange={this.handleChecked}/>
          one applicant
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="n-of-applicants" value={2} onChange={this.handleChecked} />
          two applicants
        </label>
      </div>
    </form>
    )
  }

}

export default NumberOfApplicantsForm;
