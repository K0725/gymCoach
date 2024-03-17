from fastapi import APIRouter

router = APIRouter()

from .workout import router as workout_router
from .user import router as user_router

# prefix is the path that will be added to the beginning of all the paths defined in the included router.
# tags is a list of tags that will be added to all the operations in the included router.
router.include_router(workout_router, prefix="/workouts", tags=["workouts"])
router.include_router(user_router, prefix="users", tags=["users"])