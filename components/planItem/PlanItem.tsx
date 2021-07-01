import * as React from 'react';
import { useEffect } from 'react';

export type PlanItemProps = {
    id: number
    title: string,
    price: string,
    description: string,
    services: string[],
    cssClass?: boolean
}

const PlanItem: React.FC<PlanItemProps> = ({ id, title, price, description, services, cssClass })  => {

    useEffect( () => {
        if(cssClass) {
            document.getElementById(""+id)?.classList.add("price-gradient")
            document.getElementById(id + price)?.classList.add("gradient-button")
        }        
    });

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="pricing-item">
        <h4>{ title }</h4>
        <div className="price" id={ "" + id }>
            <h6>${ price }</h6>
            <span>monthly</span>
        </div>
        <p>{ description }</p>
        <div className="dev"></div>
        <ul>
            {services.map( (item, index) => 
                <li key={index}>
                    <i className="fa fa-check"></i>{ item }
                </li>
            )}
        </ul>
        <a className="main-button" id={ id + price }>
            Start Plan
        </a>
        </div>
    </div>
  );
}

export default PlanItem;