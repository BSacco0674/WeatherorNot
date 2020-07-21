import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as weatherAPI from '../../services/api-calls';

class CityListPage extends Component {
    state = {
        cities: [],
    }

    async componentDidMount() {
        const cities = await weatherAPI.getCities();
        this.setState({cities})
    }

    render() {
        return(
            <>  
            
  <div class="row">
        {this.state.cities.map((city) => 
    <div key={city._id} class="col s6 m4">
                     <Link
                        to={{
                            pathname: `/city/${city._id}`,
                            state: {city}
                        }}
                    ><div  class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{city.name} </span>
          
        </div>
                    
      </div>
    </Link><br></br>
    </div>
)}
    </div>
 
            </>
        )
    }
}

export default CityListPage;