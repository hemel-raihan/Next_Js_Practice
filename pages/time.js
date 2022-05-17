
function Time({time})
{
    return(
        <div><h2>{time}</h2></div>
    );
}

export async function getStaticProps(ctx)
{
    return {
        props: {
            time: new Date().toISOString(),
        },
        revalidate: 5,
    };
}

export default Time;