
type PastWorkCardProps ={
    title: string,
    link: string
}
const PastWorkCard = ({
        link,title
}: PastWorkCardProps) => {
    return (<div className=" text-xl flex gap-2">
    <p>{title}</p> - <a className="underline underline-offset-2 text-blue-400" href={link} target="_blank">View</a>
  </div>)
}

export default PastWorkCard