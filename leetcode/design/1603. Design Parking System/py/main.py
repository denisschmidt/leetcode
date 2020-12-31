
class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
      self.A = [big, medium, small]

    def addCar(self, carType: int) -> bool:
        self.A[carType - 1] -= 1
        return self.A[carType - 1] >= 0