import React from 'react';

const Rating=({show,onClose, name,rate})=> {

        // Render nothing if the "show" prop is false
        if(!show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            padding: 10
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#ffb100',
            borderRadius: 5,
            maxWidth: 300,
            minHeight: 150,
            margin: '0 auto',
            padding: 30
        };


        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>

                    <div className="footer">
                        <button onClick={onClose}>
                            Close
                        </button>
                        <h1>{name}</h1>
                        <b>{rate}</b>
                        <div>
                        <button >1</button>
                        <button >2</button>
                        <button >3</button>
                        <button >4</button>
                        <button >5</button>
                        </div>
                    </div>

                </div>
            </div>
        );

}


export default Rating;