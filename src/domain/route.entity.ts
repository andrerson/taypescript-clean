import crypto from 'crypto'

export type LatLng = {
  lat: number
  lng: number
}

export type RouteProps = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  points?: LatLng[]
}

export class Route {
  public readonly id: string
  public props: Required<RouteProps>

  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID()
    this.props = {
      ...props,
      points: props.points || []
    }
  }

  updateTitle(title: string) {
    this.title = title
    //mudar para maiusculo
    //validar alguns caracteres
    //validaçoes
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition
    this.endPosition = endPosition
    //mudar para maiusculo
    //validar alguns caracteres
    //validaçoes
  }

  updatePoints(points: LatLng[]) {
    this.points = points
    //mudar para maiusculo
    //validar alguns caracteres
    //validaçoes
  }

  get title() {
    return this.props.title
  }

  private set title(value: string) {
    this.props.title = value
  }

  //startPosition
  get startPosition() {
    return this.props.startPosition
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value
  }

  //endPosition
  get endPosition() {
    return this.props.endPosition
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value
  }

  //UpdatePoints
  get points() {
    return this.props.points
  }

  private set points(value: LatLng[]) {
    this.props.points = value
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props
    }
  }
}
