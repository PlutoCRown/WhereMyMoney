interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // 打开数据库，若不存在则自动创建并打开
  // version 参数指定了当前对象仓库的版本号
  const request: IDBOpenDBRequest = indexedDB.open('myDatabase', 1);
  
  // 定义对象仓库的结构 On Upgrad Needed
  request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
    console.log("创建表");
    const db: IDBDatabase = (event.target as IDBRequest).result;
    const objectStore: IDBObjectStore = db.createObjectStore('users', { keyPath: 'id' });
    objectStore.createIndex('name', 'name', { unique: false });
  };
  
  // 连接数据库成功后执行的操作
  request.onsuccess = async (event: Event) => {
    const db: IDBDatabase = (event.target as IDBRequest).result;
  
    // 添加数据到对象仓库
    const user: User = { id: 1, name: '张三', email: 'zhangsan@example.com' };
    const transaction: IDBTransaction = db.transaction(['users'], 'readwrite');
    const objectStore: IDBObjectStore = transaction.objectStore('users');
    const request: IDBRequest = objectStore.add(user);
  
    await new Promise<void>((resolve) => {
      request.onsuccess = () => {
        console.log('添加成功');
        resolve();
      };
    });
  
    // 从对象仓库中查询数据
    const emailIndex: IDBIndex = objectStore.index('name');
    const getRequest: IDBRequest = emailIndex.get('张三');
  
    const { result: userData } = await new Promise<IDBRequest>((resolve) => {
      getRequest.onsuccess = (event: Event) => resolve(event.target as IDBRequest);
    });
  
    console.log('查询到的数据：', userData);
  
    // 更新数据，需要先通过keyPath查询到对应的记录
    const updateTransaction: IDBTransaction = db.transaction(['users'], 'readwrite');
    const updateObjectStore: IDBObjectStore = updateTransaction.objectStore('users');
    const getRequest1: IDBRequest = updateObjectStore.get(1);
  
    const { result: data } = await new Promise<IDBRequest>((resolve) => {
      getRequest1.onsuccess = (event: Event) => resolve(event.target as IDBRequest);
    });
  
    data.name = '王五'; // 修改记录
    const updateRequest: IDBRequest = updateObjectStore.put(data); // 将修改后的记录保存回数据库
  
    await new Promise<void>((resolve) => {
      updateRequest.onsuccess = () => {
        console.log('修改成功');
        resolve();
      };
    });
  
    // 删除数据，同样需要通过keyPath查询到对应的记录
    const deleteTransaction: IDBTransaction = db.transaction(['users'], 'readwrite');
    const deleteObjectStore: IDBObjectStore = deleteTransaction.objectStore('users');
    const deleteRequest: IDBRequest = deleteObjectStore.delete(1);
  
    await new Promise<void>((resolve) => {
      deleteRequest.onsuccess = () => {
        console.log('删除成功');
        resolve();
      };
    });
  };