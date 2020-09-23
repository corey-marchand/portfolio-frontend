import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { render } from 'node-sass';


// class ContactForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             author: '',
//             description: '',
//             ingredients: '',
//             steps: '',
//             meal_type: '',
//             img_src_1: '',
//             img_src_2: '',
//             img_src_3: '',
//             difficulty: '',
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         const newState = {
//             [event.target.name]: event.target.value
//         }

//         this.setState(newState);
//     }
//     handleSubmit(event) {
//     //   alert('Recipe Submited');
//     event.preventDefault();
//     console.log('Submit', this.state);
//     this.props.onRecipeCreate(this.state);
//     this.setState({
//             title: '',
//             author: '',
//             description: '', 
//             ingredients: '',
//             steps: '',
//             meal_type: '',
//             img_src_1: '',
//             img_src_2: '',
//             img_src_3: '',
//             difficulty: '',
//         });
//     }
//     render(){
//         return(
//             <Form>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control name='name' as="textarea" rows="1" placeholder="Full Name" />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control name='name' type="email" placeholder="name@example.com" />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                     <Form.Label>Company</Form.Label>
//                     <Form.Control as="textarea" rows="1" placeholder="Company" />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Message</Form.Label>
//                     <Form.Control placeholder="Message" as="textarea" rows="3" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         )
//     }
// };

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          company: '',
          message: '',
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    //     const newState = {
    //         [event.target.name]: event.target.value
    //     }

    //     this.setState(newState);
    // }
    // handleSubmit(event) {
    // //   alert('Recipe Submited');
    //   event.preventDefault();
    //   console.log('Submit', this.state);
    //   this.props.onRecipeCreate(this.state);
    //   this.setState({
    //         title: '',
    //         author: '',
    //         description: '', 
    //         ingredients: '',
    //         steps: '',
    //         meal_type: '',
    //         img_src_1: '',
    //         img_src_2: '',
    //         img_src_3: '',
    //         difficulty: '',
    //     });
    // }

    render() {
      return (
   
        <form onSubmit={this.handleSubmit}>
            <fieldset>
            <h2>Post A Recipe</h2>
                <div className="form-group row">
                    <label for="exampleInputEmail1">Name: </label>
                    <input value={this.state.title} name="name" type="text" class="form-control"  placeholder="Enter Recipe"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputUsername">Email: </label>
                    <input value={this.state.author} name="email" type="text" class="form-control" placeholder="author"/>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Company: </label>
                    <textarea value={this.state.description} name="company" class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Message: </label>
                    <textarea value={this.state.ingredients} name="message" class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
        </form>
      );
    }
}

