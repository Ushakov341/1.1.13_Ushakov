import TaskInput from './TaskInput';
import Footer from './Footer';
import ItemsList from './ItemsList';

const ToDoAppModule = () => {
  return (
    <section>
      <TaskInput />
      <ItemsList />
      <Footer />
    </section>
  );
};

export default ToDoAppModule;
