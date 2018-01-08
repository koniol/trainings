import React, {
    Component
} from 'react';
import TrainingsList from './TrainingsList';
const uuid = require('uuid');

class Trainings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [{
                    id: uuid.v4(),
                    title: 'First title',
                    text: 'Fusce finibus odio odio. Vivamus faucibus accumsan metus, at eleifend nulla ullamcorper ut. In finibus, enim sed tincidunt pulvinar.',
                    src: 'http://thefreedomteam.co/wp-content/uploads/2014/07/teamtraining-1024x742.png'
                },
                {
                    id: uuid.v4(),
                    title: 'Secend title',
                    text: ' Pellentesque massa libero, porta non faucibus ac, luctus eget orci. Donec a condimentum risus, eget consectetur ante. ',
                    src: 'http://ipapo.org/upfiles/image/training-plan.jpg'
                }
            ]
        }
    }

    onSubmmit(event){
        const target = event.target;
        let classes = target.classList;
        if(classes.contains('active')){
            classes.remove('active');
            target.innerHTML = 'Hide...';
        }else{
            classes.add('active');
            target.innerHTML = 'Show more...';
        } 
    }


    render() {
        return (
             <div>
                <TrainingsList send={(event) => this.onSubmmit(event)} list = {this.state.list}/>
            </div>
        )
    }
}


export default Trainings;