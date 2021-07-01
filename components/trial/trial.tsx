import * as React from 'react';
import Image from 'next/image';
import network from '../../assets/images/network.svg';
import content from '../../share/Content';
import message from '../../assets/images/message.png';
import message1 from '../../assets/images/message3.png';
import sendMail from '../../assets/images/mail.png';
import Support from '../support/Support';

interface TrialProps {
}

const Trial: React.FC<TrialProps> = (props) => {

    const { trial } = content.internal;

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
                    value="Đăng ký ngay" 
                    className="button-primary btn shadow-lg is-white"
                ></input>
            </form>
        </div>
        <div className="block-decoration-1 opacity-20">
            <Image src={trial.img} alt=""/>
        </div>

        <div className="bg-dark p-5"></div>

        <Support/>

    </section>
  );
};

export default Trial;
