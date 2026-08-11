import React, { useEffect, useRef, useState } from 'react';

const CounterItem = ({ icon, end, suffix, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
        <div className="counter" ref={ref}>
            <div className="counter__icon"><i className={`fas ${icon}`}></i></div>
            <div className="counter__value">{count}{suffix}</div>
            <div className="counter__label">{label}</div>
        </div>
    );
};

export default function Counters() {
    return (
        <section className="counters" id="counters">
            <div className="container">
                <div className="counters__grid">
                    <CounterItem icon="fa-users" end={500} suffix="+" label="Clients Worldwide" />
                    <CounterItem icon="fa-calendar-check" end={5} suffix="+" label="Years Experience" />
                    <CounterItem icon="fa-globe" end={50} suffix="+" label="Countries Served" />
                    <CounterItem icon="fa-face-smile" end={98} suffix="%" label="Client Satisfaction" />
                </div>
            </div>
        </section>
    );
}
