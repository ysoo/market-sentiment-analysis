let _notificationCenter;

export const setNavbarRef = (notificationRef) => {
    _notificationCenter = notificationRef
}

export const updateNotification = (data) => {
    _notificationCenter.updateNotification(data)
}

