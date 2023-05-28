# wodbuster-reserver
This project is aimed to make a reservation through Wodbuster 3 days prior to the actual class. 

For example: Running this project on Sunday at 23:00 should book a class for Wednesday at the desired hour.

## How to run
You can run this project using docker, but make sure you set up all the environment variables properly.

```
docker run miluna:wodbuster-reserver \
-e CYPRESS_USERNAME=user \
-e CYPRESS_PASSWORD=pass \
-e CYPRESS_HOST=wodbuster-host \
-e CYPRESS_NOTICE_DAYS=3 \
-e CYPRESS_CLASS_TIME=1945 \
-e CYPRESS_CLASS_TYPE=CrossFit
```
