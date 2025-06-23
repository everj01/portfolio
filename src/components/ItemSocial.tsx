export default function ItemSocial(props: {url: string, icon: string, name: string, style: string}) {
  return (
    <>
      <a href={props.url} target='_blank' className={`group transition-all duration-100 p-0 m-0 
        hover:-translate-y-1 hover:scale-125 pe-8 text-glow
        ${props.style}`}>
        <i className={`icon text-2xl transition-transform duration-100  ${props.icon} `}></i>
      </a>
    </>
  );
}


