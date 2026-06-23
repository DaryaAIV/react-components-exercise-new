import Spam from './Spam';

const Spamalot = () => {
    let spamArr = [];
    for (let i = 0; i < 500; i++) {
        spamArr.push(<Spam />);
    }

    return (
        <>
            {spamArr}
        </>
    );
};
export default Spamalot;
