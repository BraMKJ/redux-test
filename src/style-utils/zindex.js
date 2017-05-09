const zIndex = (layer) => {
  const layers = {
    aboveGround: 1,
    hoverActiveFocus: 2,
    absoluteFloating: 3,
    fixedFloating: 4,
    widgetPopupContainer: 5,
    tetherElement: 10,
    overlay: 15,
    modal: 20,
    blockingLoader: 25
  }
  return layers[layer]
}

export default zIndex