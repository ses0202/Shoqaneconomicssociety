import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ScrollPane;
import javafx.scene.layout.VBox;
import javafx.scene.layout.StackPane;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class SmoothScrollApp extends Application {


    @Override
    public void start(Stage primaryStage) {
        // Создание заголовка
        Text header = new Text("Олимпиада по экономике");
        
        // Кнопки для навигации
        Button financialLiteracyButton = new Button("Финансовая грамотность");
        Button businessBasicsButton = new Button("Основы бизнеса");
        Button contactsButton = new Button("Контакты");

        // Тексты для различных секций
        Text financialLiteracyText = new Text("Содержимое раздела 'Финансовая грамотность'. Здесь будет информация о финансовой грамотности.");
        Text businessBasicsText = new Text("Содержимое раздела 'Основы бизнеса'. Здесь будет информация о бизнесе.");
        Text contactsText = new Text("Содержимое раздела 'Контакты'. Здесь будут контактные данные.");

        // Создание VBox для секций
        VBox content = new VBox(20);
        content.getChildren().addAll(header, financialLiteracyText, businessBasicsText, contactsText);

        // Создание ScrollPane для прокрутки
        ScrollPane scrollPane = new ScrollPane(content);
        scrollPane.setFitToWidth(true);

        // Обработчики событий для кнопок
        financialLiteracyButton.setOnAction(e -> scrollTo(scrollPane, financialLiteracyText));
        businessBasicsButton.setOnAction(e -> scrollTo(scrollPane, businessBasicsText));
        contactsButton.setOnAction(e -> scrollTo(scrollPane, contactsText));

        // Создание VBox для кнопок
        VBox buttonBox = new VBox(10);
        buttonBox.getChildren().addAll(financialLiteracyButton, businessBasicsButton, contactsButton);

        // Создание основного макета
        StackPane root = new StackPane();
        root.getChildren().addAll(scrollPane, buttonBox);

        Scene scene = new Scene(root, 600, 400);
        primaryStage.setTitle("Плавная прокрутка на JavaFX");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    // Метод для плавной прокрутки
    private void scrollTo(ScrollPane scrollPane, Text target) {
        double targetY = target.getLayoutY();
        scrollPane.setVvalue(targetY / scrollPane.getContent().getBoundsInLocal().getHeight());
    }

    public static void main(String[] args) {
        launch(args);
    }
}
