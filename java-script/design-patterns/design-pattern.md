# Design Patterns?

Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.

Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.

Design patterns are not a finished design that can be transformed directly into code. They are a template that needs to be customized to solve a particular design problem.

Design patterns can speed up the development process by providing tested, proven development paradigms.

Effective software design requires considering issues that may not become visible until later in the implementation. Reusing design patterns helps to prevent subtle issues that can cause major problems and improves code readability for coders and architects who are familiar with the patterns.

## Why do we need Design Patterns?

Design patterns have two main purposes:

1. **Common Platform for Developers**: Design patterns provide a standard terminology and are specific to particular scenarios. This makes it easier for developers to communicate with each other.
2. **Best Practices**: Design patterns have been evolved over a long period and provide the best solutions to certain problems faced during software development.
3. **Optimized Code**: Design patterns are already optimized and provide the best solution to a problem. This helps in reducing the overall code size and makes it easier to understand.
4. **Reusability**: Design patterns, once created, can be used any number of times. This helps in reducing the overall development cost.
5. **Scalability**: Design patterns can be used to scale the application from small to large scale.
6. **Fast Development**: Design patterns help in providing a proven solution quickly. Hence, it helps in faster development of the application.
7. **Easy Maintenance**: Application that uses design patterns are easier to maintain and understand. It also makes the application more robust.
8. **Solving Issues**: Design patterns help in solving issues that may arise during the development phase of the application.
9. **Better Code Quality**: Since design patterns provide the best practices, it helps in better code quality.
10. **Easy Troubleshooting**: The application that uses design patterns are easier to troubleshoot and debug.

## Types of Design Patterns

Design patterns can be classified in three categories:

1. **Creational Design Patterns**: These design patterns are all about class instantiation or object creation. These patterns can be further divided into class-creation patterns and object-creational patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.
2. **Structural Design Patterns**: These design patterns are about organizing different classes and objects to form larger structures. Structural design patterns are further divided into class-structural patterns and object-structural patterns. The class-structural patterns use inheritance to compose interfaces, and the object-structural patterns define ways to compose objects to obtain new functionality.
3. **Behavioral Design Patterns**: These design patterns are specifically concerned with communication between objects. Behavioral patterns are those patterns that are most specifically concerned with communication between objects.

## Creational Design Patterns

Creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

### Types of Creational Design Patterns

1. **Factory Methods**: Factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of object that will be created.
2. **Abstract Factory**: Abstract Factory patterns work around a super-factory which creates other factories. This factory is also called as factory of factories.
3. **Builder**: Builder pattern builds a complex object using simple objects and using a step by step approach.
4. **Prototype**: Prototype pattern refers to creating duplicate object while keeping performance in mind. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
5. **Singleton**: Singleton pattern is one of the simplest design patterns in Java. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.

## Structural Design Patterns

Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that if one part of a system changes, the entire system doesn't need to do the same.

### Types of Structural Design Patterns

1. **Adapter**: Adapter pattern works as a bridge between two incompatible interfaces. This type of design pattern comes under structural pattern as this pattern combines the capability of two independent interfaces.
2. **Bridge**: Bridge is used when we need to decouple an abstraction from its implementation so that the two can vary independently.
3. **Composite**: Composite pattern is used where we need to treat a group of objects in similar way as a single object.
4. **Decorator**: Decorator pattern is used to add new functionality to an existing object without altering its structure. This pattern creates a decorator class which wraps the original class and provides additional functionality keeping class methods signature intact.
5. **Facade**: Facade pattern is used to simplify a complex system. This pattern involves a single class which provides simplified methods required by client and delegates calls to methods of existing system classes.
6. **Flyweight**: Flyweight pattern is primarily used to reduce the number of objects created and to decrease memory footprint and increase performance.
7. **Proxy**: In proxy pattern, a class represents functionality of another class. This type of design pattern comes under structural pattern.

## Behavioral Design Patterns

Behavioral patterns are concerned with the assignment of responsibilities between objects, or, encapsulating behavior in an object and delegating requests to it.

### Types of Behavioral Design Patterns

1. **Chain of Responsibility**: Chain of responsibility pattern is used to achieve loose coupling in software design where a request from client is passed to a chain of objects to process them.
2. **Command**: Command pattern is a data driven design pattern and falls under behavioral pattern category. A request is wrapped under an object as command and passed to invoker object. Invoker object looks for the appropriate object which can handle this command and passes the command to the corresponding object which executes the command.
3. **Interpreter**: Interpreter pattern provides a way to evaluate language grammar or expression. This type of pattern comes under behavioral pattern.
4. **Iterator**: Iterator pattern is very commonly used design pattern in Java and .Net programming environment. This pattern is used to get a way to access the elements of a collection object in sequential manner without any need to know its underlying representation.
5. **Mediator**: Mediator pattern is used to reduce communication complexity between multiple objects or classes. This pattern provides a mediator class which normally handles all the communications between different classes and supports easy maintenance of the code by loose coupling.
6. **Memento**: Memento pattern is used to restore state of an object to a previous state. This pattern is used to undo the changes in an object.
7. **Observer**: Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified, its dependent objects are to be notified automatically.
8. **State**: State pattern is used when an object changes its behavior based on its internal state.
9. **Strategy**: Strategy pattern is used when we have multiple algorithm for a specific task and client decides the actual implementation to be used at runtime.
10. **Template**: Template pattern is used to create a method stub and deferring some of the steps of implementation to the subclasses.
11. **Visitor**: Visitor pattern is used when we have to perform an operation on a group of similar kind of objects.

## Conclusion

Design patterns are a very powerful tool for software developers. They provide a template on how to solve a problem that can be used in many different situations. They also provide a common platform for developers to communicate with each other. Design patterns have been evolved over a long period and provide best solutions to certain problems faced during software development. They are a proven way to solve problems that software developers face.

Design patterns are a must for software developers to solve the common problems they face during software development. They speed up the development process by providing tested, proven development paradigms. They also provide a common platform for developers to communicate with each other. Design patterns are a very powerful tool for software developers.
