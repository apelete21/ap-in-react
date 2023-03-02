import NavLink from "../NavLink"

export function StartNavBtnLight() {
    return (
        <div className="get--start">
            <NavLink className="btn default-outline light-outline" href={"/start-with-us"}>
                start with us
            </NavLink>
        </div>
    )
}

export function StartNavBtnDark() {
    return (
        <div className="get--start">
            <NavLink className="btn default-outline" href={"/start-with-us"}>
                start with us
            </NavLink>
        </div>
    )
}
