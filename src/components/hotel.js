import React from 'react';
import Styled from 'styled-components';
import propTypes from 'prop-types';
import ReactStars from 'react-stars';
import getSymbolFromCurrency from 'currency-symbol-map';

const Hotel = props => {
  return (
    <Container>
      <figure>
        <img src={props.image} alt={`${props.title} | Qantas Hotels`} />
        {props.promotion && <figcaption>{props.promotion}</figcaption>}
      </figure>
      <summary>
        <div className="details">
          <div className="title">
            <h2>{props.title}</h2>
            <ReactStars
              count={5}
              value={props.rating}
              edit={false}
              char={props.ratingType === 'self' ? '●' : '★'}
            />
          </div>
          <h4>{props.address}</h4>
          {props.promotion && (
            <a
              href={`https://www.qantas.com/hotels/properties/${props.id}`}
              title={props.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.roomName}
            </a>
          )}
          {props.freeCancellation && <p className="cancellation">Free cancellation</p>}
        </div>
        <div className="cost">
          <p>{`${props.numNights} night total (${props.currency})`}</p>
          <h3>
            <sup>{getSymbolFromCurrency(props.currency)}</sup>
            {props.price}
          </h3>
          {props.savings !== 0 && (
            <p className="saving">
              {`Save ${getSymbolFromCurrency(props.currency)} ${props.savings}~`}
            </p>
          )}
        </div>
      </summary>
    </Container>
  );
};

const Container = Styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 23% 77%;
  font-size: 11px;
  figure{
    padding-top:3px;
    position: relative;
    figcaption{
      position: absolute;
      top: 10px;
      font-size: 11px;
      font-weight: bold;
      color: red;
      background: white;
      padding: 8px 9px;
    }
  }
  summary{
    display: block;
    border-bottom: 1px solid grey;
    padding: 15px 0 5px 0;
    display: grid;
    grid-template-columns: 83% 17%;
    .details{
      .title{
        display: grid;
        grid-template-columns: 70% 30%;
        h2{
          white-space: nowrap;
          max-width: 282px;
          text-overflow: ellipsis; 
          overflow: hidden;    
          font-weight: normal;
          font-size: 18px; 
          padding-bottom: 5px;
        }
      }
      h4{
        color: grey;
        font-weight: normal;
        padding-bottom: 18px;
      }
      a{ 
        color: red;
        padding-bottom: 40px;
        display: block;
      }
      .cancellation{
        color: green;
        
      }
    }
    .cost{
      padding: 35px 7px 0 0;        
      text-align: right;
      h3{
        font-size: 29px;
        font-weight: normal;
        padding:7px 0 10px;
        
        sup{
          font-size: 15px;
          vertical-align: top;
        }
      }
      .saving{
        font-size: 16px;
        color: red;
      }
    }
  }
  &:first-of-type summary {
    border-top: 1px solid grey;
  }
`;

Hotel.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  rating: propTypes.number,
  ratingType: propTypes.oneOf(['self', 'star']),
  promotion: propTypes.string,
  roomName: propTypes.string,
  price: propTypes.number.isRequired,
  savings: propTypes.number,
  freeCancellation: propTypes.bool.isRequired,
  numNights: propTypes.number.isRequired,
  currency: propTypes.string.isRequired
};

Hotel.defaultProps = {
  rating: 0,
  promotion: '',
  savings: 0,
  roomName: '',
  ratingType: 'star'
};

export default Hotel;
