import { Divider } from 'antd';
import { Input, Space } from 'antd';
import { Pagination } from 'antd';
import React from 'react';



export default function Table(){
    
    const { Search } = Input;
    
    return(
        <div className="TableBG">
            <div className="TableHeader">
                <h2 className="TableTitle">Pessoas</h2>
                <Space direction="vertical">
                    <Search placeholder=""  style={{ width: 200, marginTop: 3 }} />  
                </Space>          
            </div>
            <Divider className='TableDivider' />
            <div className='TableDiv'>
                <div className='TableDataIni'>
                    <h2 className='TableParams'>Nome</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>Luke Skywalker</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>C-3PO</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>R2-D2</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>Darth Vader</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>Leia Organa</h2>
                    <Divider className='TableDivider'/>
                </div>
                <div className='TableData'>
                    <h2 className='TableParams'>Altura</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>172cm</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>167cm</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>96cm</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>202cm</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>150cm</h2>
                    <Divider className='TableDivider'/>
                </div>
                <div className='TableData'>
                    <h2 className='TableParams'>Ano de Nascimento</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>19BBY</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>112BBY</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>33BBY</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>41.9BBY</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>19BBY</h2>
                    <Divider className='TableDivider'/>
                </div>
                <div className='TableData'>
                    <h2 className='TableParams'>Criado Em</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-09</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-10</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-10</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-10</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-10</h2>
                    <Divider className='TableDivider'/>
                </div>
                <div className='TableData'>
                    <h2 className='TableParams'>Editado Em</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-20</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-20</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-20</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-20</h2>
                    <Divider className='TableDivider'/>
                    <h2 className='TableResult'>2014-12-20</h2>
                    <Divider className='TableDivider'/>
                </div>
            </div>
            
        </div>
    )

   
}

