{
  "nested": {
    "Message": {
      "fields": {
        "name": {
          "type": "string",
          "id": 1
        },
        "id": {
          "type": "int32",
          "id": 2
        },
        "email": {
          "type": "string",
          "id": 3
        }
      },
      "nested": {
        "PhoneType": {
          "values": {
            "MOBILE": 0,
            "HOME": 1,
            "WORK": 2
          }
        },
        "PhoneNumber": {
          "fields": {
            "number": {
              "type": "string",
              "id": 1
            },
            "type": {
              "type": "PhoneType",
              "id": 2
            }
          }
        }
      }
    }
  }
}