import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => MyAppState(),
      child: MaterialApp(
        title: 'Starter App',
        theme: ThemeData(
          useMaterial3: true,
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange),
        ),
        home: MyHomePage(),
      ),
    );
  }
}

class MyAppState extends ChangeNotifier {
  var current = 0;
  void getNext(add) {
    current = (current + add).toInt();
    notifyListeners();
  }
  void clear() {
    current = 0;
    notifyListeners();
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();
    var pair = appState.current;
    return Scaffold(
      body: Column(
      children: [
        // taqi
        BigCard(pair: pair),
        ElevatedButton(
          onPressed: () {
            appState.getNext(10);
          },
          child: Text('Task 1 = 10 points'),
        ),
        ElevatedButton(
          onPressed: () {
            appState.getNext(20);
          },
          child: Text('Task 2 = 20 points'),
        ),
        ElevatedButton(
          onPressed: () {
            appState.clear();
          },
          child: Text('Clear Points'),
        ),
      ],
      )
    );
  }
}

class BigCard extends StatelessWidget {
  const BigCard({
    super.key,
    required this.pair,
  });

  final pair;
// vruj

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text(pair.toString()),
      ),
    );
  }
}
