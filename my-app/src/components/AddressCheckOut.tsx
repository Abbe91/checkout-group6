import React  ,{ Component}  from 'react';

import { Form,Input, AutoComplete } from 'antd';

const FormItem = Form.Item;


class AddressForm extends Component {
   render(){ 
        return (
         
 
            <div>
              <h2>Shipping adress</h2>
              <FormItem name={['Your', 'Email']}  label="your Email" rules={[{ required: true }]} >
                      <AutoComplete  placeholder="Email" />
                </FormItem>
                
                <FormItem label="Your Name" name={["user", "name"]}  rules={[{ required: true, message: 'Username is required' }]}>
                      <Input name="name"   placeholder="Full name"  />
                </FormItem>
              
                <FormItem name={['address', 'street']} label="Address" rules={[{ required: true, message: 'Street is required' }]}>
                  <Input  placeholder="Input street" />
                </FormItem>
                <FormItem name={['frmZipS', 'frmZipS']} label="Zip Code" rules={[{ required: true, message: 'Street is required' }]}>
                  <Input name= "frmZipS" placeholder="Input street" />
                </FormItem>

                <FormItem name={['frmCityS', 'frmCityS']} label="The City" rules={[{ required: true, message: 'Street is required' }]}>
                  <Input  name="frmCityS" placeholder="Sweden" />
                </FormItem>
        
              </div>
    
    
            
        );
    }
  }
  
  export default AddressForm;