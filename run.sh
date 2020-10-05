echo Starting test
counter=1
while [ $counter -le 10 ]
do
    npx codeceptjs run
    sleep 2
    ((counter++))
done
echo Test done