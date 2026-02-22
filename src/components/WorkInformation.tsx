import w from './style/WorkInfo.module.scss'

function AboutTony() {
    return(
            <div className={w.TextAboutTony}>
                <p>
                I’m a visionary engineer with 5+ years of experience building advanced technologies that push the limits of innovation.
                </p>
                <p>
                I specialize in AI systems, clean architecture, and sustainable energy solutions, with a focus on scalable and maintainable engineering. My approach combines technical precision with bold thinking to create systems that truly change the world.
                </p>
                <p>
                Currently leading innovation at Stark Industries and open to strategic collaborations.
                </p>
        </div>
    )

}

function Exp() {
    return(
        <div className={w.Stats}>
            <div className={w.Experience}>
                <p> Experience</p>
                <h3> 5+ Years</h3>
                <p> In AI engineering </p>
            </div>

            <div className={w.Projects}>
                <p> Projects</p>
                <h3> 120+</h3>
                <p>Successfully delivered</p>
            </div>

            <div className={w.Clients}>
                <p> Clients</p>
                <h3> 30+</h3>
                <p>Worldwide</p>
            </div>
        </div>
    )
}
export default function Allinfo() {
    return (
        <div className={w.AllInfoField}>
            <AboutTony/>
            <Exp/>
        </div>
    )
}