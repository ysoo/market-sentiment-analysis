let _navbarCenter;

export const setNavbarRef = (notificationRef) => {
    _navbarCenter = notificationRef
}

export const returnHome = (atHome) => {
    _navbarCenter.returnHome(atHome)
}

