import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Donors extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.control = false;
    this.interval = 3000;
    this.donorDataUrl = './server/donors.php';
    this.state = {
      donors: [],
      activeDonors: []
    };
  };

  componentDidMount() {
    const _this = this;
    const cycleDonors = () => {
      setTimeout(function () {
        const donors = _this.state.donors;
        donors.push(donors.splice(0, 1)[0]);
        donors.push(donors.splice(0, 1)[0]);
        donors.push(donors.splice(0, 1)[0]);
        donors.push(donors.splice(0, 1)[0]);
        donors.push(donors.splice(0, 1)[0]);
        _this.setState({
          donors: donors,
          activeDonors: donors.slice(0, 5),
        });
        cycleDonors();
      }, this.interval);
    }
    this._isMounted = true;
    this.setState({ isLoading: true });
    fetch(this.donorDataUrl)
      .then(r => {
        return r.json();
      })
      .then(data => {
        if (data) {
          const length = data.length;
          for (let i = 0; i < length; i++) {
            data[i] = (i + 1) + '. ' + data[i];
          }
          this.setState({
            donors: data,
            activeDonors: data.slice(0, 5),
            isLoading: false
          });
          cycleDonors();
        }
      })
      .catch(message => {
        console.error(message);
      });
  }

  render() {
    return (
      <div className='thank-you-heading h2'><span>Thank you to our donors ({this.state.donors.length})</span>
        <Carousel controls={this.controls} interval={this.interval}>
          <Carousel.Item>
            <p className='h5'>{this.state.activeDonors[0]}</p>
            <p className='h5'>{this.state.activeDonors[1]}</p>
            <p className='h5'>{this.state.activeDonors[2]}</p>
            <p className='h5'>{this.state.activeDonors[3]}</p>
            <p className='h5'>{this.state.activeDonors[4]}</p>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Donors;
