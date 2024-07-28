import json

from typing import Mapping
from faker import Faker

Restaurant = Mapping[str, object]


def main() -> None:
    fake = Faker()

    restaurant_list: list[Restaurant] = []

    num_restaurants = 10

    for _ in range(num_restaurants):
        restaurant: Restaurant = {
            "name": fake.company(),
            "address": fake.address(),
            "phone": fake.phone_number(),
            "cuisine_type": fake.random_element(
                elements=("Italian", "Mexican", "Japanese", "Chinese", "Indian")
            ),
            "email": fake.company_email(),
            "rating": round(
                fake.random_number(digits=1) % 5 + 1, 1
            ),  # Generate a rating between 1.0 and 5.0
        }
        restaurant_list.append(restaurant)

    for restaurant in restaurant_list:
        print(restaurant)
    print(json.dumps(restaurant_list, indent=4))


if __name__ == "__main__":
    main()
