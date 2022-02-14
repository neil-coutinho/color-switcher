export default function ColorChangeButton({color, setColor}) {

    return (
        <button className={`button-${color}`} onClick={() => setColor(color)}>{color}</button>
    );

}