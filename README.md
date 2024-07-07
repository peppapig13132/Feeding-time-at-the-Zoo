# Feeding Time at the Zoo

You've just been hired as the senior backend developer at the Sarmarkhand Zoo. At feeding time, the Zookeepers would like to know how much extra food has been prepared.

### Given a list of animals:
```
cat
dog
tiger
tiger
rabbit
donkey
donkey
```

### And a list of food:
```
hay
hay
carrot
fish
deer
deer
deer
deer
dogfood
dogfood
```

Each animal eats 1 item from the food list. The animals and food items are fixed to the ones defined above. The items are eaten in order, that is the first tiger in the animals list will always eat the first deer in the food list. Write a function to find out what's left, both the items and their order. Concatenate the leftover list separated by "-" characters. In the example above the correct output becomes "deer-deer-dogfood". Please post the solution string at the top of your proposal, in the above example the proposal should start with "deer-deer-dogfood"

The animals are found in the animals.txt file and the food is found in the food.txt file. The maximum size of the animals and food list is 1,000,000 items. It's a big zoo.
