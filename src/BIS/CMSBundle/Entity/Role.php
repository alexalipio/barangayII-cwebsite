<?php

namespace BIS\CMSBundle\Entity;

use Symfony\Component\Security\Core\Role\RoleInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="role")
 * @ORM\Entity()
 */
class Role implements RoleInterface {
    /**
     * @ORM\Column(
     *  name="id",
     *  type="integer"
     * )
     * @ORM\Id()
     * @ORM\GeneratedValue(
     *  strategy="AUTO"
     * )
     */
    private $id;

    /**
     * @ORM\Column(
     *  name="name",
     *  type="string",
     *  length=30
     * )
     */
    private $name;

    /**
     * @ORM\Column(
     *  name="role",
     *  type="string",
     *  length=20,
     *  unique=true
     * )
     */
    private $role;

    /**
     * @ORM\ManytoMany(
     *  targetEntity="User",
     *  mappedBy="roles"
     * )
     */
    private $users;

    public function __construct() {
        $this->users = new ArrayCollection();
    }

    /**
     * @see RoleInterface
     */
    public function getRole() {
        return $this->role;
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Role
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set role
     *
     * @param string $role
     * @return Role
     */
    public function setRole($role)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * Add users
     *
     * @param \BIS\CMSBundle\Entity\User $users
     * @return Role
     */
    public function addUser(\BIS\CMSBundle\Entity\User $users)
    {
        $this->users[] = $users;

        return $this;
    }

    /**
     * Remove users
     *
     * @param \BIS\CMSBundle\Entity\User $users
     */
    public function removeUser(\BIS\CMSBundle\Entity\User $users)
    {
        $this->users->removeElement($users);
    }

    /**
     * Get users
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getUsers()
    {
        return $this->users;
    }
}
