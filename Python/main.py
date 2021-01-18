from turtle import Turtle, Screen
from sloth import Sloth
import time
#from branches import Branch
#from leaves import Leaf


# import time

screen = Screen()
screen.setup(width=800, height=600)
screen.bgcolor("White")
screen.title("Sloth Saver")
screen.tracer(0)

sloth = Sloth((0, -250))
#leaves = Leaf()
#branches = Branch()


screen.listen()
screen.onkey(sloth.right_side, "Right")
screen.onkey(sloth.left_side, "Left")

game_is_on = True
while game_is_on:
    time.sleep(0.1)
    screen.update()
    # sloth.move()


screen.exitonclick()

# structure:
# 1.create the screen
# 2.create and move the sloth - left to right
# 4.create the branches and make them move continuously down the screen
# 5.create the leaves and make them move continuously down the screen
# 6.detect collision with branches >> every branch += 1 point, and branches fall faster each additional point
# 7.detect collision with leaves >> every additional leaf = branches slow down
# 8.branch disappears when it collides with sloth - if branch falls to bottom than game over
# 9.create scoreboard - keep score >> every branch += 1 point


