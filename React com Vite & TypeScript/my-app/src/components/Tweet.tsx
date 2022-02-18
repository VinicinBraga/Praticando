type TweetProps = {
  text: string
}

export default function Tweet(props: TweetProps) {
  return (
    <div>{props.text}</div>
  )
}
