<h1 align="center">notif-ease: a notification service 🔔</h1>
<p align = center>
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/hostel-bazaar/main/assets/hbgithub.jpg" target="_blank" />
</p>
<h2 align='center'>A microserviced, scalable, highly available notification service.</h2><br/>

## 📚 | Introduction

- notif-ease is an microserviced, scalable, highly available and highly performant notification service.
- It uses Apache Kafka as message queue for notification service.
- Built on top of express framework.
- It uses MongoDB as database.

### _**Disclaimer**_

- This is a demo application of an notification service and is not intended for production use, at least not without some ec2 business.

<br/>

## 🚀 | Usage

- Install Docker Desktop and NodeJS for a quick setup.

- Pull kafka and zookeeper images from docker hub.

- Clone this repository:<br>    
```sh
git clone https://github.com/muKaustav/notif-ease.git
```

- Find the .env.example file in the home dir and rename it to .env.<br>

- Fill in the required environment variables in the .env files.<br>

- Enjoy the project! 😉

<br/>

## ⌛ | Let's talk about Kafka
Both Kafka and RabbitMQ are popular message brokers that can be used for building notification services. However, Kafka has some advantages over RabbitMQ when it comes to building a high-performance, scalable, and fault-tolerant notification system. Here are some advantages of using Kafka over RabbitMQ for a notification service:

- **Higher Throughput:** Kafka is designed for high-throughput, real-time data streaming, making it an ideal choice for building a notification service that requires processing large amounts of data in real-time. RabbitMQ, on the other hand, may not be as efficient in handling high-velocity data streams.

- **Scalability:** Kafka's distributed architecture allows for easy scaling of the system, making it ideal for handling large-scale data processing requirements. RabbitMQ, on the other hand, requires more configuration and setup to handle high-velocity data streams.

- **Fault-Tolerance:** Kafka is highly fault-tolerant and can handle node failures without data loss. This makes it an ideal choice for mission-critical systems where data loss is not an option. RabbitMQ, on the other hand, may experience data loss during node failures, leading to data inconsistency.

- **Performance:** Kafka's unique architecture allows it to achieve better performance than RabbitMQ, especially when it comes to processing large amounts of data. Kafka uses a publish-subscribe model, whereas RabbitMQ uses a queue-based model, which can lead to lower performance in some cases.

- **Ecosystem:** Kafka has a mature and vibrant ecosystem that supports a wide range of use cases and integrations, making it easier to build and deploy a notification service. RabbitMQ, on the other hand, has a smaller ecosystem and may require more customization to support specific use cases.

In summary, Kafka's strengths in handling high-throughput, scalability, fault-tolerance, and performance make it an ideal choice for building a notification service over RabbitMQ.

<br/>

## 📘 | System Design Schematic

<p align = center>
    <img alt="getURL" src="https://github.com/muKaustav/notif-ease/blob/main/assets/notifeasearch.png?raw=true" target="_blank" />
</p>

<br/>

## 🍻 | Contributing

Contributions, issues and feature requests are welcome.<br>
Feel free to check [issues page](https://github.com/muKaustav/notif-ease/issues) if you want to contribute.

<br/>

## 🧑🏽 | Author

**Kaustav Mukhopadhyay**

- Linkedin: [@kaustavmukhopadhyay](https://www.linkedin.com/in/kaustavmukhopadhyay/)
- Github: [@muKaustav](https://github.com/muKaustav)

<br/>

## 🙌 | Show your support

Drop a ⭐️ if this project helped you!

<br/>

## 📝 | License

Copyright © 2023 [Kaustav Mukhopadhyay](https://github.com/muKaustav).<br />
This project is [MIT](./LICENCE) licensed.

---
