import React, { Component, Fragment } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const COUNTRY_QUERY = gql`
  query CountryQuery($code: String!) {
    country(code: $code) {
      code
      name
      currency
      phone
    }
  }
`;

const SLink = styled(Link)`
  color: black;
  text-decoration: none;
  color: grey;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

const CountryItemContainer = styled.div`
  box-sizing: border-box;
  padding: 8px;
  display: inline-block;
`;

const Panel = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #ddd;
`;

const PanelHeading = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
`;

const PanelBody = styled.div`
  padding: 15px;
`;

const ListGroup = styled.div`
  padding-left: 0;
  margin-bottom: 20px;
`;

const ListGroupItem = styled.div`
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
`;

const BoldTxt = styled.span`
  font-weight: bold;
`;

const ItalicTxt = styled.span`
  font-style: italic;
`;

export class Country extends Component {
  render() {
    let { code } = this.props.match.params;
    return (
      <Fragment>
        <Query query={COUNTRY_QUERY} variables={{ code }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            const { name, currency, phone } = data.country;

            return (
              <CountryItemContainer>
                <Panel>
                  <PanelHeading>
                    <BoldTxt>Country name: </BoldTxt>
                    {name}
                  </PanelHeading>
                  <PanelBody>
                    <ListGroup>
                      <ListGroupItem>
                        <ItalicTxt>Currency: {currency}</ItalicTxt>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ItalicTxt>Area code:</ItalicTxt> {phone}
                      </ListGroupItem>
                    </ListGroup>
                  </PanelBody>
                </Panel>
                <hr />
                <SLink to="/countries">Back</SLink>
              </CountryItemContainer>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Country;
