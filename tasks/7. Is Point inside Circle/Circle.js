import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      let x_coordinates = Point.x;
      let y_coordinates = Point.y;

      let x_center = center.x;
      let y_center = center.y;

      let result = Math.pow((x_coordinates-x_center), 2) +
                    Math.pow((y_coordinates-y_center), 2);

      radius = Math.pow(radius, 2);

      if(result <= radius) {
        return true;
      } else return false;
    }
  }
}
