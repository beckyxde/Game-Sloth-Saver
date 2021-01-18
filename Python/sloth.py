from turtle import Turtle


class Sloth(Turtle):

    def __init__(self, position):
        super().__init__()
        self.shape("turtle")
        self.color("black")
        self.penup()
        self.goto(position)

    def right_side(self):
        # self.forward()
        new_x = self.xcor() + 20
        self.goto(self.ycor(), new_x)

    def left_side(self):
        # self.forward()
        new_x = self.xcor() - 20
        self.goto(self.ycor(), new_x)
