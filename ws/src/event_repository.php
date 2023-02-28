<?php

namespace App\Repository;


use App\User;
use swoole_table;

class EventRepository
{
    /**
     * @var swoole_table
     */
    private $table;

    public function __construct() {
        $this->reCreateTable();
    }

    /**
     * @param int $id
     * @return Publisher|false
     */
    public function get(string $id) {
        $userRow = $this->table->get($id);
        if ($userRow !== false) {
            return $userRow;
        }
        return null;
    }

    /**
     * Get all online users
     * @param int[] $ids
     * @return Events[]
     */
    public function getByIds(array $ids) {
        $data = [];
        foreach ($ids as $id) {
            $row = $this->table->get($id);
            if ($row !== false) {
                $users[] = $row;
            }
        }
        return $data;
    }

    public function getEvents(){
        $data = [];
        foreach ($this->table as $row){
            $data[] = $row;
        }
        return $data;
    }

    /**
     * @param int $eventId
     */
    public function delete(string $eventId): void {
        if ($this->table->exists($eventId))
            $this->table->del($eventId);
    }

    /**
     * Save publisher to table in memory;
     */
    public function save($id, $data): void {
        $result = $this->table->set($id, $data);
        if ($result === false) {
            $this->reCreatePublishersTable();
            $this->table->set($id, $data);
        }
    }

    public function reCreateTable(): void {
        if (isset($this->table)) {
            $this->table->destroy();
        }
        $this->table = new swoole_table(131072);
        $this->table->column('event_id', swoole_table::TYPE_STRING, 100);
        $this->table->column('publisher_id', swoole_table::TYPE_STRING, 100);
        $this->table->column('is_live', swoole_table::TYPE_INT, 4);
        $this->table->create();
    }
}