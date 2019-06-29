import React, { Fragment, Component } from 'react';
import Styled from 'styled-components';
import { Helmet } from 'react-helmet';

import 'reset-css';
import propTypes from 'prop-types';
import logo from '../svgs/qantas.svg';
import Hotel from '../components/hotel';
import order from '../funcs/order';

class IndexPage extends Component {
  constructor(props) {
    super();

    this.state = {
      hotels: Object.values(props.pathContext),
      city: 'Sydney'
    };
  }

  handleFormChange(event) {
    this.setState({
      hotels: order(this.state.hotels, 'price', event.target.value)
    });
  }

  render() {
    return (
      <Fragment>
        <Helmet title="JB - Qantas Hotels Test Code" />
        <Container>
          <img src={logo} className="logo" alt="Qantas Logo" />
          <header>
            <p>
              <strong>
{this.state.hotels.length}
{' '}
 </strong>
              <i>Hotels in </i>
              <strong>{this.state.city}</strong>
            </p>
            <form onChange={this.handleFormChange.bind(this)}>
              <label>Sort by </label>
              <select>
                <option value="desc">Price high-low</option>
                <option value="asc">Price low-high</option>
              </select>
            </form>
          </header>
          <ul>
            {this.state.hotels.map(element => {
              return <Hotel key={element.id} numNights={1} currency="AUD" {...element} />;
            })}
          </ul>
        </Container>
      </Fragment>
    );
  }
}

IndexPage.propTypes = {
  pathContext: propTypes.shape.isRequired
};

const Container = Styled.section`
  width: 792px;
  margin: auto;
  padding: 37px 21px;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  strong, h1, h2, h3, h4, h5 {
    font-weight: bold;
  }
  header {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 15px;
    form{
      justify-self: end;
    }
  }
  i {
    font-style: italic;
  }
  * {
    box-sizing: border-box;
  }
  .logo {
    width: 170px;
    margin-bottom: 29px;
  }
`;
export default IndexPage;
