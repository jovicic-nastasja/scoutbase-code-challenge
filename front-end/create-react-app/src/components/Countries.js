import React, { Component, Fragment } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import CountryItem from "./CountryItem";
// import Continents from "./Continents";
import styled from "styled-components";

const GET_ALL_COUNTRIES = gql`
  {
    countries {
      code
      name
      native
      emoji
      continent {
        name
      }
      languages {
        name
        native
      }
    }
  }
`;

const CountriesContainer = styled.div`
  margin-bottom: 24px;
`;

const CountriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export class Countries extends Component {
  render() {
    return (
      <Fragment>
        <Title>Countries</Title>
        <hr />
        {/* <Continents/> */}
        <Query query={GET_ALL_COUNTRIES}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                <CountriesContainer>
                  <CountriesList>
                    {data.countries.map(country => (
                      <CountryItem key={country.code} country={country} />
                    ))}
                  </CountriesList>
                </CountriesContainer>
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

const Title = styled.h2`
  color: #351e29;
`;

export default Countries;
