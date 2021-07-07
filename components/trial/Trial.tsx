import * as React from 'react';
import Image from 'next/image';
import useTranslate from '../../hooks/useTranslate';

interface TrialProps {
}

const Trial: React.FC<TrialProps> = (props) => {
    
    const translate = useTranslate();
    const { trial } = translate.internal;

  return (
    <section className="section bg-cta position-relative overflow-hidden" id="register">

        <div className="col block-centered text-align-center col-12 z-index-10">
            <h2 className="on-dark">
                <strong>{trial.title}</strong>
            </h2>
            <div className="on-dark margin-bottom">{trial.content}</div>
            <form action="https://my.cloudfly.vn/server/trial">
                <input 
                    type="hidden" 
                    name="csrfmiddlewaretoken"
                    value="tRG8vLkZ9QlcomcKWXUAqOY8j1RY3ZTtoMAd3uvc8EmwymUH7yN3RMYqFRssw6qs"
                ></input>
                <input 
                    type="submit" 
                    value={trial.button} 
                    className="button-primary btn shadow-lg is-white"
                ></input>
            </form>
        </div>
        <div className="block-decoration-1 opacity-20 animate-spin">
            <Image src={trial.img} alt=""/>
        </div>
    </section>
  );
};

export default Trial;
