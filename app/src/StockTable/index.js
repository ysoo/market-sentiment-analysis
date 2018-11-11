import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import { Header, Table, Container } from 'semantic-ui-react'
class StockTable extends Component {

  renderTable = () => {
    let companies = [
        { 
            CompanyName : "Bloomberg",
            CompanyCode : "BLG",
            SemanticScore : 1.25
        },
        { 
            CompanyName : "Apple",
            CompanyCode : "APPL",
            SemanticScore : -2
        },
        { 
            CompanyName : "Google",
            CompanyCode : "GOOGL",
            SemanticScore : -1.7
        },
        { 
            CompanyName : "Epic",
            CompanyCode : "EPIC",
            SemanticScore : -1.25
        }
    ]
   
    return (
        <div  class = "stock-table">
                <Table celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Companies</Table.HeaderCell>
                            <Table.HeaderCell>Sentiments</Table.HeaderCell>
                        </Table.Row>    
                    </Table.Header>
                    <Table.Body>
                        {companies.map((el, index) => (
                            <Table.Row>
                                <Table.Cell>
                                <Header as='h4' >
                                    {/* <Image src = '../logo.svg' rounded size='mini' /> */}
                                    <Header.Content>
                                    {el.CompanyName}
                                    <Header.Subheader>{el.CompanyCode}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                                </Table.Cell>
                                <Table.Cell>
                                    <Header.Content>
                                    {el.SemanticScore}
                                    </Header.Content>
                                </Table.Cell>
                            </Table.Row>
                            
                        ))}
                    </Table.Body>
                </Table>
        </div>
    )
  }
  render() {
    return (   
        <div>
            {this.renderTable()}
        </div>
    );
  }
}

export default StockTable;
