const CirclePlus = () => {
  return (  
    <svg className="circle-plus" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
        <circle cx="22.5" cy="22.5" r="22.5" fill="currentColor"/>
        <rect x="21.67" y="10" width="2" height="25" rx=".83" ry=".83" fill="#000"/>
        <rect x="21.67" y="10" width="2" height="25" rx=".83" ry=".83" transform="translate(0 45) rotate(-90)" fill="#000"/>
    </svg> 
  );
};

export default CirclePlus;