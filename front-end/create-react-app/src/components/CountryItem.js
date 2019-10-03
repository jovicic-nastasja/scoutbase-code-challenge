import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  flex: 1 1 33%;
  max-width: 33%;
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

const PanelFooter = styled.div`
  display: block;
  margin-bottom: 25px;
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
  /* border-top-left-radius: 4px;
  border-top-right-radius: 4px; */
`;

const BoldTxt = styled.span`
  font-weight: bold;
`;

const ItalicTxt = styled.span`
  font-style: italic;
`;

export default function CountryItem({
  country: { code, name, native, emoji, continent, languages }
}) {
  return (
    <CountryItemContainer>
      <Panel>
        <PanelHeading>
          <BoldTxt>
            {" "}
            {emoji} {name} | {native}{" "}
          </BoldTxt>
        </PanelHeading>
        <PanelBody>
          <ListGroup>
            <ListGroupItem>
              <ItalicTxt>Continent:</ItalicTxt> {continent.name}
            </ListGroupItem>
            <ListGroupItem>
              <ItalicTxt>Languages: </ItalicTxt>
              {languages.map((language, i) => {
                return i === languages.length - 1
                  ? language.name
                  : language.name + " | ";
              })}
            </ListGroupItem>
            <ListGroupItem>
              <ItalicTxt>Native: </ItalicTxt>
              {languages.map((language, i) => {
                return i === languages.length - 1
                  ? language.native
                  : language.native + " | ";
              })}
            </ListGroupItem>
          </ListGroup>
        </PanelBody>
        <PanelFooter>
          <SLink to={`/countries/${code}`}>Details</SLink>
        </PanelFooter>
      </Panel>
    </CountryItemContainer>
  );
}
